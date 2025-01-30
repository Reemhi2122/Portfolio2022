<template>//Funcion loads bitmaps changed in runtime, currently only works for
	//files using the 0000_x.extension format. It also updates material values
	//changed in 0000.txt

	//Getting list of files in the directory.
	char** directory_list = PHYSFS_enumerateFiles("assets/textures/");

	//Going over all the files in the directory
	for (char** i = directory_list; *i != NULL; i++) {
		char file_path[128];
		sprintf(file_path, "assets/textures/%s", *i);
		
		//Check if file changed or has been created since last check.
		//If its old, continue to next element.
		PHYSFS_Stat stat;
		PHYSFS_stat(file_path, &stat);
		if (stat.createtime &lt;= g_LastTextureUpdate && stat.accesstime &lt;= g_LastTextureUpdate)
			continue;

		//Getting the file name, example: {999.png}.
		char file_name[128];
		strcpy(file_name, *i);
		printf(" * NEW = [%s].\n", file_name);

		//Getting the extension and numb of the file, example: {.png, 999}.
		char* extension = strrchr(file_name, '.');
		char* num = strtok(file_name, "_");
		if (!num || !extension)
			continue;

		//converting numb to integer  data
		uint16_t bm_index = atoi(num);
		RT_MaterialDefinition current_material = materials[bm_index];

		//Upating a .txt
		if (strcmp(extension, ".txt") == 0) {
			RT_MaterialDefinitionFile def_file;
			def_file = RT_ParseMaterialDefinitionFile(bm_index);

			current_material.roughness = def_file.roughness;
			current_material.metalness = def_file.metalness;
			current_material.emissive_factor = (RT_Vec3){
				def_file.emissive_r,
				def_file.emissive_g,
				def_file.emissive_b,
			};
		}

		//Updating a .png
		if (strcmp(extension, ".png") == 0) {
				
			RT_ResourceHandle texture_handle;
			int w, h, c;

			//Getting the type from file, example: {E} from 999_E.png
			char* type = strtok(strtok(NULL, "_"), ".");

			if (type != NULL) {
				if (strcmp(type, "C") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.albedo_texture);
				}
				else if (strcmp(type, "N") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.normal_texture);
				}
				else if (strcmp(type, "MR") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.metallic_roughness_texture);
				}
				else if (strcmp(type, "E") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.emissive_texture);
				}
			}
		}
		
		//Updating the material for rendering
		materials[bm_index] = current_material;
		RT_UpdateMaterial(bm_index, &current_material);
	}

	//Set last texture update
	//Free the files list
	g_LastTextureUpdate = time(NULL);
	PHYSFS_freeList(directory_list);
}

void RT_UploadRuntimeBitmap(char* fileName, uint16_t bm_index, RT_ResourceHandle* curResourceHandle) {
	RT_ResourceHandle texture_handle;
	int w, h, c;

	RT_ArenaMemoryScope(&g_thread_arena)
	{
		const char* filename = RT_ArenaPrintF(&g_thread_arena, "assets/textures/%s", fileName);
		const unsigned char* image_data = RT_LoadImageFromDisk(&g_thread_arena, filename, &w, &h, &c, 4);
		texture_handle = RT_UploadTexture(&(RT_UploadTextureParams) {
			.width = w,
				.height = h,
				.pixels = image_data,
				.name = RT_ArenaPrintF(&g_thread_arena, "Game Texture #%i (substituted: %s)", bm_index, fileName),
				.format = RT_TextureFormat_SRGBA8,
		});
		*curResourceHandle = texture_handle;
	}
}</template>
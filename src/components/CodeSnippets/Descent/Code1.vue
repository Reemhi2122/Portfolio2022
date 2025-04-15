<template>//This would be the raytracing side of the code, where the
//camera would be enabled and disabled. Because I cannot adjust most
//of the game code directly, we have to hack our way through it.

//Note: This is only a small part of the code to get this working, 
//but is pasted here to showcase atleast something
void RT_EnableFreeCam()
{
	g_rt_free_cam_info.g_free_cam_enabled = true;
	g_rt_free_cam_info.g_old_cockpit = PlayerCfg.CockpitMode[1];

	g_rt_free_cam_info.g_free_cam_obj = obj_create(OBJ_CAMERA, 0,
		ConsoleObject->segnum, &ConsoleObject->pos, &ConsoleObject->orient, 0,
		CT_FLYING, MT_PHYSICS, RT_NONE);

	Objects[g_rt_free_cam_info.g_free_cam_obj].mtype.phys_info.drag = 2162;
	Objects[g_rt_free_cam_info.g_free_cam_obj].mtype.phys_info.mass = 262144;
	Objects[g_rt_free_cam_info.g_free_cam_obj].mtype.phys_info.flags = PF_USES_THRUST;
	Objects[g_rt_free_cam_info.g_free_cam_obj].size = 310325.0F;

	CollisionResult[OBJ_CAMERA][OBJ_WALL] = RESULT_CHECK; CollisionResult[OBJ_CAMERA][OBJ_WALL] = RESULT_CHECK;

	Viewer = &Objects[g_rt_free_cam_info.g_free_cam_obj];

	PlayerCfg.HudMode = 3; // NO HUD mode
	select_cockpit(CM_FULL_SCREEN);
	PlayerCfg.CockpitMode[0] = CM_FULL_SCREEN;
}

void RT_DisableFreeCam()
{
	g_rt_free_cam_info.g_free_cam_enabled = false;

	Viewer = ConsoleObject;

	CollisionResult[OBJ_CAMERA][OBJ_WALL] = RESULT_NOTHING; CollisionResult[OBJ_CAMERA][OBJ_WALL] = RESULT_NOTHING;

	PlayerCfg.HudMode = 0; // Standard HUD mode
	select_cockpit(g_rt_free_cam_info.g_old_cockpit);
	PlayerCfg.CockpitMode[0] = g_rt_free_cam_info.g_old_cockpit;

	obj_delete(g_rt_free_cam_info.g_free_cam_obj);
}

//Struct created for the free cam information
typedef struct RT_FreeCamInfo {
	int g_free_cam_obj;
	bool g_free_cam_enabled;
	bool g_free_cam_clipping_enabled;
	int g_old_cockpit;
} RT_FreeCamInfo;

//Copied from main render frame update
{
	if (!g_use_free_cam) {
		g3_set_view_matrix(&Viewer_eye, &Viewer->orient, Render_zoom);
	}
	else {
		g3_set_view_matrix(&Viewer_eye, &Objects[g_free_cam_obj].orient, Render_zoom);
	}

	RT_Vec3 player_pos;
	if (!g_use_free_cam) {
		//Setup main camera
		g_cam.vfov = 60.0f;
		player_pos = RT_Vec3FromVmsVector(Viewer->pos);
		g_cam.position = player_pos;
		
		//We just take the real view matrix and not the viewer's one. Since the view matrix gets properly used and changed.
		g_cam.up = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.uvec));
		g_cam.forward = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.fvec));
		g_cam.right = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.rvec));
		
		//We still keep this code incase anything breaks due to the camera.
		//g_cam.up = RT_Vec3FromVmsVector(Viewer->orient.uvec);
		//g_cam.forward = RT_Vec3FromVmsVector(Viewer->orient.fvec);
		//g_cam.right = RT_Vec3FromVmsVector(Viewer->orient.rvec);

		scene_settings.camera = &g_cam;
	}
	else {
		//Setup free cam	
		g_free_cam.vfov = 90.0f;

		player_pos = RT_Vec3FromVmsVector(Objects[g_free_cam_obj].pos);
		g_free_cam.position = player_pos;

		g_free_cam.up = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.uvec));
		g_free_cam.forward = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.fvec));
		g_free_cam.right = RT_Vec3Normalize(RT_Vec3FromVmsVector(View_matrix.rvec));
		scene_settings.camera = &g_free_cam;
	}
}

//Copied from input handler
{
	case KEY_SHIFTED + KEY_ALTED + KEY_F:
	{
		if (!g_use_free_cam) {
			g_use_free_cam = true;
			g_old_cockpit = PlayerCfg.CockpitMode[1];
			
			g_free_cam_obj = obj_create(OBJ_CAMERA, 0,
				ConsoleObject->segnum, &ConsoleObject->pos, &ConsoleObject->orient, 0,
				CT_FLYING, MT_PHYSICS, RT_NONE);

			Objects[g_free_cam_obj].mtype.phys_info.drag = 2162;
			Objects[g_free_cam_obj].mtype.phys_info.mass = 262144;
			Objects[g_free_cam_obj].mtype.phys_info.flags = PF_USES_THRUST;

			select_cockpit(CM_FULL_SCREEN);
		}
		else {
			g_use_free_cam = false;
			select_cockpit(g_old_cockpit);
			g_old_cockpit = 0;

			obj_delete(g_free_cam_obj);
		}

		break;
	}
}</template>
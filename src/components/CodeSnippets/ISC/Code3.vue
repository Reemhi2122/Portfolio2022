<template>private void ResetPictures()
    {
        DeliverdPictures = 0;
        FinishedPictureDeduction = false;

        PictureText.text = $"{DeliverdPictures} / {AmountOfNeededPictures}";
    }

    public bool ButtonPressedNewFax()
    {
        if (FaxPaperPos.childCount > 0)
        {
            GetComponentInChildren&lt;FaxPaper>().GetComponent&lt;Outline>().enabled = true;
            return false;
        }

        EventManager.Instance.OnNewDecryptSequence(this);

        return true;
    }

    private void StartNewSequencer(object sender)
    {
        List&lt;SequenceSymbol> createSequence = new List&lt;SequenceSymbol>();

        RoundsCompleted++;
        if (RoundsCompleted > GameplaySettings.RoundsIncreaseSymbols)
        {
            if(SymbolAmount &lt; GameplaySettings.MaxAmountOfSymbols)
                SymbolAmount++;

            if (AmountOfNeededPictures &lt; GameplaySettings.MaxAmountOfPictures)
                AmountOfNeededPictures++;

            RoundsCompleted = 0;
        }

        int maxDeduction = (int)Mathf.Ceil((float)SymbolAmount / 2.0f);
        int clampedDelivered = Mathf.Clamp(DeliverdPictures, 0, AmountOfNeededPictures);
        int FinalSymbolAmount = (int)Mathf.Ceil((float)maxDeduction / (float)AmountOfNeededPictures * (float)clampedDelivered);

        DeliverdPictures -= clampedDelivered;

        for (int i = 0; i &lt; FinalSymbolAmount; i++)
            createSequence.Add((SequenceSymbol)Random.Range(0, 4));

        ResetPictures();
        PrintNewSequence(createSequence);
        SendSequence(createSequence);

        PlayAudioClipEventArgs e = new PlayAudioClipEventArgs
        {
            audioClip = faxSound,
            position = transform.position,
            physical = true
        };
        EventManager.Instance.OnPlayAudioClip(this, e);

    }

    private void PrintNewSequence(List&lt;SequenceSymbol> a_SymbolList)
    {
        GameObject obj = Instantiate(PaperPrefab, FaxPaperPos.position, FaxPaperPos.rotation, FaxPaperPos);
        Transform canvas = obj.transform.GetChild(0).transform;

        GameObject symbol;
        for (int i = 0; i &lt; a_SymbolList.Count; i++)
        {
            symbol = Instantiate(PaperSymbolPrefab, canvas);
            symbol.GetComponent&lt;Image>().sprite = Symbols[(int)a_SymbolList[i]];
        }
    }

    private void SendSequence(List&lt;SequenceSymbol> a_SymbolList)
    {
        MainDecryptor.SetSequence(a_SymbolList);
    }

    private void Decrypted(object Sender)
    {
        UpdateTimer();
    }

    private void UpdateTimer()
    {
        int timeLeft = (int)Mathf.Floor(ipad.IpadDecryptedTimer.GetTimeRemaining());

       //  DecryptedText.text = $"Decryption time | {timeLeft}";

        if (timeLeft >= 0)
        {
            DecryptTimer.Disable(1);
            DecryptTimer.Enabled = true;
            DecryptTimer.TickAction = UpdateTimer;
            return;
        }

        // DecryptedText.text = $"Decryption time | --";
        DecryptTimer.Enabled = false;
    }

    private void Update()
    {
        if (GameManager.Instance.GameState != GameState.GameState_Play)
            return;

        DecryptTimer.Update();
    }</template>
<template>
using InSheepsClothing.Events;
using System.Collections;
using UnityEngine;
using VRTools.Interaction;

namespace InSheepsClothing
{
	public class VotingSheep : Sheep
    {
		private Quaternion PresentationRotation = new Quaternion();
		private Transform PlayerTransform;
        private bool IsVoting = false, IsLookingPresentation = false;

		public Animator _animator = null;

		private Timer
			_peekTimer = new Timer(),
			_peekDelayTimer = new Timer();

        private void Awake()
        {
			_animator = GetComponentInChildren<Animator>();
			_animator.ForceStateNormalizedTime(UnityEngine.Random.Range(0.0f, 1.0f));

			_peekDelayTimer.SetTime(Random.Range(GameplaySettings.VotingSheepPeekDelayTimeMin, GameplaySettings.VotingSheepPeekDelayTimeMax));
			_peekDelayTimer.Enabled = false;
			_peekDelayTimer.TickAction = OnPeek;
		}

        private void Start()
        {
			GameManager gameManager = GameManager.Instance;

			Vector3 PresentationSheepTransform = gameManager.PresentationTransform.position;
			Transform MyTransform = this.transform;
			MyTransform.LookAt(new Vector3(PresentationSheepTransform.x, this.transform.position.y, PresentationSheepTransform.z), Vector3.up);
			PresentationRotation = MyTransform.rotation;

			PlayerTransform = gameManager.player.transform;
		}

        private new void OnEnable()
		{
			base.OnEnable();
			EventManager.Instance.RoundStart += RoundStart;
			EventManager.Instance.NextSlideWarning += NextSlideWarning;
			EventManager.Instance.PlayerNextSlide += PlayerNextSlide;
		}

		private new void OnDisable()
		{
			base.OnDisable();
			EventManager.Instance.RoundStart -= RoundStart;
			EventManager.Instance.NextSlideWarning -= NextSlideWarning;
			EventManager.Instance.PlayerNextSlide -= PlayerNextSlide;
		}

        private void RoundStart(object sender)
		{
			_peekDelayTimer.Enabled = true;
		}

		private void NextSlideWarning(object sender)
		{
			IsLookingPresentation = true;
		}

		private void PlayerNextSlide(object sender)
		{
			IsLookingPresentation = false;
		}

        public override bool IsSheepLooking()
        {
            return base.IsSheepLooking() || IsVoting || IsLookingPresentation;
        }

        private void OnPeek()
		{
			_peekDelayTimer.Reset();
			_peekDelayTimer.Enabled = false;

			float suspiciousness = GetSuspiciousness() / 100.0f;
			float halfpeekdelaymax = GameplaySettings.VotingSheepPeekDelayTimeMax;
			float peeksussubraction = halfpeekdelaymax * suspiciousness;

			_peekDelayTimer.SetTime(Random.Range(GameplaySettings.VotingSheepPeekDelayTimeMin, GameplaySettings.VotingSheepPeekDelayTimeMax - peeksussubraction));

			_peekTimer.SetTime(Random.Range(GameplaySettings.VotingSheepPeekTimeMin, GameplaySettings.VotingSheepPeekTimeMax));
			_peekTimer.Enabled = true;
			_peekTimer.TickAction = OnPeekEnd;

			IsLooking = true;
		}

		private void OnPeekEnd()
		{
			_peekTimer.Reset();
			_peekTimer.Enabled = false;

			IsLooking = false;
		}

		private new void Update()
		{
			base.Update();
			_peekDelayTimer.Update();
			_peekTimer.Update();

			if (IsLooking || IsVoting || IsLookingPresentation)
			{
				Quaternion originalRot = transform.rotation;
				Transform LookAtPlayer = this.transform;
				LookAtPlayer.LookAt(new Vector3(PlayerTransform.position.x, transform.position.y, PlayerTransform.position.z), Vector3.up);
				transform.rotation = Quaternion.Lerp(originalRot, LookAtPlayer.rotation, 0.1f);
			}
			else
				transform.rotation = Quaternion.Lerp(transform.rotation, PresentationRotation, 0.1f);
		}

        public void Vote(Vote a_Vote)
        {
            IsVoting = true;
			_animator.SetInteger("Vote", (int) a_Vote);
			_animator.SetBool("IsVoting", true);
        }

        public void EndVote()
        {
			_animator.SetBool("IsVoting", false);
            IsVoting = false;
        }
    }
}
</template>

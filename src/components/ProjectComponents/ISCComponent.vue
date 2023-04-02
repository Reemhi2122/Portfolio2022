<template>
  <div class="project-container">
    <div class="front-page">
      <div class="header-background">
        <div class="header-text">
          <h1 class="header-title">In sheep's clothing</h1>
          <h2 class="header-subtitle">GameJam turned into full game</h2>
        </div>
      </div>

      <video class="project-video" poster="../../assets/Image/Portfolio/ISC/Main.jpg" controls>
        <source src="/src/assets/Image/Portfolio/ISC/InSheepsClothing.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="indv-project-bubbles-container">
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">engineering</span> Gameplay programmer
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">code</span> C#
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">build</span> Unity
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">group</span> 2 members
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">schedule</span> 6 months
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">calendar_month</span> 2022 / 2023
        </div>
      </div>
    </div>

    <CarrouselComp :cards="this.images" class="carousel-comp"/>

    <p class="project-text">
      Sheep have taken over politics. They are on their way to becoming the biggest political party in the world. You as
      a human were sent in to spy on one of their meetings. You are disguised as a sheep in a suit. Make sure they don’t
      suspect you and get as much information as you can!
    </p>

    <div class="findcode-github">
      <h1>Find this project on</h1>
      <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
    </div>

    <section class="software-skills">
      <h2 class="section-header">Software skills improved this project</h2>
      <div class="software-skills-icons">
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" title="Unity" />
          <p class="software-skill-title"> Engine </p>
          <p class="software-skill-text"> Unity </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" title="C#" />
          <p class="software-skill-title"> Language </p>
          <p class="software-skill-text"> C# </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="C#" />
          <p class="software-skill-title"> Source control </p>
          <p class="software-skill-text"> Git </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image" src="../../assets/Image/Logos/OculusLogo.svg" title="Oculus" />
          <p class="software-skill-title"> VR System </p>
          <p class="software-skill-text"> Oculus </p>
        </div>
        <div class="software-skill-element">
            <img class="software-skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" title="Windows" />
            <p class="software-skill-title"> Platform </p>
            <p class="software-skill-text"> Windows </p>
        </div>
      </div>
    </section>

    <section class="contribution-section">
      <h2 class="section-header">What I contributed to the project</h2>
      <div class="contribution-element-container">
        <div class="contribution-element">
          <p class="contribution-element-title">Voting System</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/VotingSystem.jpg">
          <p class="contribution-text">The main mechanic in the game is the voting, this is where you as a player are in
            the spotlight
            and have to vote the same as the other sheep. This was done using events, and when a sheep notices you are
            not voting the correct answer, their suspicousness will go up.
          </p>  
          <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[0]}">
<code class="language-csharp">public enum VotingState
{
	VotingState_None,
	VotingState_Waiting,
}

namespace InSheepsClothing
{
	public enum Vote
	{
		Yes,
		No,
		None
	}

	public class VotingSystem : MonoBehaviour
	{
		private VotingState votingState;
		public VotingState VotingState =&gt; votingState;
		public List&lt;VotingSheep&gt; votingSheep =&gt; GameManager.Instance.SheepSystem.VotingSheepList;
		public SheepSystem sheepSystem;

		private Vote expectedVote;
		public Vote ExpectedVote =&gt; expectedVote;

		private void DisableTimer(ref Timer timer, float time)
		{
			timer.Enabled = false;
			timer.Reset();
			timer.SetTime(time);
		}

		[SerializeField]
		private Timer
			_voteTimer = new Timer(),
			_votingTimer = new Timer();

		public Timer VoteTimer =&gt; _voteTimer;
		public Timer VotingTimer =&gt; _votingTimer;

		private void Awake()
		{
			_voteTimer.Enabled = false;
			_votingTimer.Enabled = false;

			_voteTimer.SetTime(GameplaySettings.TimeToVoteMax);
			_votingTimer.SetTime(GameplaySettings.TimeTillVotingDelayRoundStart);
		}

        private void OnEnable()
		{
			EventManager.Instance.RoundStart += RoundStart;
		}

        private void RoundStart(object sender)
		{
			EventManager.Instance.RoundStart -= RoundStart;

			EventManager.Instance.Vote += StartVote;
			EventManager.Instance.PlayerVoted += PlayerVoted;

			_votingTimer.Enabled = true;
			_votingTimer.TickAction = VotingGracePeriodEnded;

			_voteTimer.SetTime(GameplaySettings.TimeToVoteMax);
			_votingTimer.SetTime(GameplaySettings.TimeTillVotingDelayRoundStart);
		}

        private void OnDisable()
		{
			EventManager.Instance.Vote -= StartVote;
			EventManager.Instance.PlayerVoted -= PlayerVoted;
		}

		private void VotingGracePeriodEnded()
		{
			float time = GameplaySettings.TimeTillVotingMax;
			DisableTimer(ref _votingTimer, time);

			_votingTimer.TickAction = VotingTimerFinished;
			EventManager.Instance.OnVote(this);
		}

		private void VotingTimerFinished()
		{
			float time = _votingTimer.GetTime() * GameplaySettings.TimeTillVotingMultiplier;
			time = Mathf.Clamp(time, GameplaySettings.TimeTillVotingMin, GameplaySettings.TimeTillVotingMax);
			DisableTimer(ref _votingTimer, time);

			EventManager.Instance.OnVote(this);
		}

		private void Update()
		{
			_voteTimer.Update();
			_votingTimer.Update();
		}

		public void StartVote(object sender)
		{
			if (votingState == VotingState.VotingState_Waiting)
				return;

			votingState = VotingState.VotingState_Waiting;

			expectedVote = Random.Range(0, 2) == 0 ? Vote.No : Vote.Yes;
			Debug.Log(expectedVote);

			List&lt;int&gt; SheepLeft = new List&lt;int&gt;();

			Debug.Log(votingSheep.Count + " count of voting sheep");
			for (int i = 0; i &lt; votingSheep.Count; i++)
				SheepLeft.Add(i);

			int minimumVotingCorrect = (votingSheep.Count / 2) + 1;
			int maxVotingCorrect = votingSheep.Count + 1;
			int amountOfCorrectSheep = Random.Range(minimumVotingCorrect, maxVotingCorrect);

			Debug.Log(amountOfCorrectSheep + " correct sheep");

			for (int i = 0; i &lt; amountOfCorrectSheep; i++)
			{
				int currentSheep = Random.Range(0, SheepLeft.Count);
				votingSheep[SheepLeft[currentSheep]].Vote(expectedVote);
				SheepLeft.RemoveAt(currentSheep);
			}

			for (int i = 0; i &lt; SheepLeft.Count; i++)
				votingSheep[SheepLeft[i]].Vote(expectedVote == Vote.No ? Vote.Yes : Vote.No);

			_voteTimer.Enabled = true;
			_voteTimer.TickAction = OnVoteEnd;
		}

		private void OnVoteEnd()
		{
			CheckVote(Vote.None);
		}

		private void PlayerVoted(object sender, PlayerVotedEventArgs e)
		{
			if (votingState == VotingState.VotingState_None)
				return;

			CheckVote(e.vote);
		}

		public void EndVote()
        {
			votingState = VotingState.VotingState_None;
			for (int i = 0; i &lt; votingSheep.Count; i++)
				votingSheep[i].EndVote();
		}

		private void CheckVote(Vote vote)
		{
			// Start delay timer again.
			_votingTimer.Enabled = true;

			// Reset and disable actual voting timer.
			_voteTimer.Reset();
			_voteTimer.Enabled = false;

			EndVote();

			if (vote == expectedVote)
				return;

			for (int i = 0; i &lt; votingSheep.Count; i++)
				votingSheep[i].AddSuspiciousness();
			
			GameManager.Instance.player.Detected();

			float time = _voteTimer.GetTime() * GameplaySettings.TimeToVoteMultiplier;
			time = Mathf.Clamp(time, GameplaySettings.TimeToVoteMin, GameplaySettings.TimeToVoteMax);
			_voteTimer.SetTime(time);
		}
	}
}
            </code>
          </pre>
          <div class="code-snippet-button-container">
            <button type="button" @click="ToggleCodeSnippet(0)" class="code-snippet-button">Toggle Snippet</button>
            <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/VotingSystem.cs" class="code-snippet-button" target="_blank">View on github</a>
          </div>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Sheep spawning</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/SheepSpawning.jpg">
          <p class="contribution-text"> We didn't want all sheep to be there all the time, so we decided to start with a
            fixed amount of sheep
            in the beginning of the game, and added more when the player managed to get further into the game. This
            would ensure
            an easy start for the player and gradually make it harder.
          </p>
          <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[1]}">
<code class="language-csharp">namespace InSheepsClothing
{
    public class SheepSystem : MonoBehaviour
    {
        public List&lt;Sheep&gt; AllSheep;
        public List&lt;VotingSheep&gt; availableSheep; 
        public List&lt;VotingSheep&gt; VotingSheepList;
        public PeekSheep peekSheep;
        public PresentationSheep presentationSheep;
        public WindowWashingSheep windowWashingSheep;

        private Timer sheepSpawnTimer = new Timer();
		
        private void RoundStart(object sender)
        {
            StartTimer(this);
            EventManager.Instance.PictureTaken += CheckIfSheepLooking;
			for (int i = 0; i &lt; GameplaySettings.AmountOfStartingSheep; i++)
			{
				int randomSheep = Random.Range(0, availableSheep.Count);
				AllSheep.Add(availableSheep[randomSheep]);
				VotingSheepList.Add(availableSheep[randomSheep]);
				availableSheep[randomSheep].transform.parent.gameObject.SetActive(true);
				availableSheep.RemoveAt(randomSheep);
			}

			AllSheep.Add(presentationSheep);
			AllSheep.Add(peekSheep);
			AllSheep.Add(windowWashingSheep);

            GameManager.Instance.ipad.UpdateIpadBars();

			sheepSpawnTimer.SetTime(GameplaySettings.ExtraSheepSpawnTimer);
			sheepSpawnTimer.Enabled = true;
			sheepSpawnTimer.TickAction = OnSpawnNewSheep;
		}

        private void OnEnable()
        {
            EventManager.Instance.RoundStart += RoundStart;
        }

        private void OnDisable()
        {
            EventManager.Instance.PictureTaken -= CheckIfSheepLooking;
            EventManager.Instance.RoundStart -= StartTimer;
        }

        private void Update()
        {
            sheepSpawnTimer.Update();
        }

        public void CheckIfSheepLooking(object a_Sender)
        {
            for(int i = 0; i &lt; AllSheep.Count; i++)
            {
                if (AllSheep[i].IsSheepLooking())
                {
                    AllSheep[i].AddSuspiciousness();
                    GameManager.Instance.player.Detected();
                }
            }
        }

        public int GetSheepSuspiciousness()
        {
            int TotalSuspiciousness = 0;
            for (int i = 0; i &lt; AllSheep.Count; i++)
                TotalSuspiciousness += AllSheep[i].GetSuspiciousness();
            return TotalSuspiciousness;
        }

        public void StartTimer(object sender)
        {
            sheepSpawnTimer.Enabled = true;
        }

        public void OnSpawnNewSheep()
        {
            if (availableSheep.Count &gt; 0) {
                int randomSheep = Random.Range(0, availableSheep.Count);
                AllSheep.Add(availableSheep[randomSheep]);
                VotingSheepList.Add(availableSheep[randomSheep]);
                availableSheep[randomSheep].transform.parent.gameObject.SetActive(true);
                availableSheep.RemoveAt(randomSheep);

                sheepSpawnTimer.SetTime(GameplaySettings.ExtraSheepSpawnTimer);
                GameManager.Instance.ipad.UpdateIpadBars();

                return;
            }

            sheepSpawnTimer.Enabled = false;
        }
    }
}
</code>
          </pre>
          <div class="code-snippet-button-container">
            <button type="button" @click="ToggleCodeSnippet(1)" class="code-snippet-button">Toggle Snippet</button>
            <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/SheepSystem.cs" class="code-snippet-button" target="_blank">View on github</a>
          </div>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Suspicousness</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/Suspicousness.jpg">
          <p class="contribution-text">All the sheep have an individual suspicousness bar, which if full is hard to
            remove. All these bars
            together act as a total suspicous bar and when this one is full, the game is over. The sheep will only get
            more
            suspicous when they look at the player while they are doing something suspicous. The suspicousness is
            displayed on
            a dynamic ipad. This will tell the player all this information without having to add an actual HUD.
          </p>
          <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[2]}">
<code class="language-csharp">namespace InSheepsClothing
{
    public class Ipad : MonoBehaviour
    {
        public Slider TotalSuspicousness;
        public Slider[] IndividualSuspicousness = new Slider[11];
        public GameObject TextBox;
        public TMP_Text TextPrefab;

        private SheepSystem sheepSystem;
        private int amountPic = 0;

        public void Start()
        {
            sheepSystem = GameManager.Instance.SheepSystem;
        }

        public void UpdateIpadBars()
        {
            for (int i = 0; i &lt; sheepSystem.AllSheep.Count; i++)
                IndividualSuspicousness[i].gameObject.SetActive(true);
        }

        public void AddPicture()
        {
            amountPic++;
            TMP_Text newText = Instantiate(TextPrefab, TextBox.transform);
            newText.text = "Picture amount: " + amountPic;
        }

        public void Update()
        {
            float TotalSheepSuspicousness = 0;

            for (int i = 0; i &lt; sheepSystem.AllSheep.Count; i++)
            {
                float correctedValue = ((float)sheepSystem.AllSheep[i].GetSuspiciousness()) / 100.0f;
                IndividualSuspicousness[i].value = correctedValue;
                TotalSheepSuspicousness += correctedValue;
            }

            if(Input.GetKeyDown(KeyCode.P))
                AddPicture();

            TotalSuspicousness.value = TotalSheepSuspicousness / GameManager.Instance.SheepSystem.AllSheep.Count;
        }
    }
}
</code>
          </pre>
          <div class="code-snippet-button-container">
            <button type="button" @click="ToggleCodeSnippet(2)" class="code-snippet-button">Toggle Snippet</button>
            <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Ipad.cs" class="code-snippet-button" target="_blank">View on github</a>
          </div>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Peek sheep</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/PeekSheep.jpg">
          <p class="contribution-text">I also created the peek sheep that you can see in the right corner, this sheep
            will peek at you at certain
            intervals and will make it harder for the player to do his work and report back to the FBI. This sheep will
            start looking
            at you more the longer the game goes on and had its own supsicous rating.
          </p>
          <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[3]}">
<code class="language-csharp">namespace InSheepsClothing
{
    public class PeekSheep : Sheep
    {
        private Animator DoorAnimator;

        [SerializeField]
        private Timer 
            _peekSheepTimer = new Timer(),
            _peekSheepPeekTimer = new Timer();

        private void Awake()
        {
            DoorAnimator = gameObject.GetComponent&lt;Animator&gt;();

            _peekSheepTimer.Enabled = false;
            _peekSheepPeekTimer.Enabled = false;

            _peekSheepTimer.SetTime(GameplaySettings.PeekSheepTimeDelayRoundStart);
            _peekSheepPeekTimer.SetTime(GameplaySettings.PeekSheepTimeMax);
            _peekSheepPeekTimer.TickAction = StopPeeking;
        }

        private new void OnEnable()
        {
            base.OnEnable();
            EventManager.Instance.RoundStart += RoundStart;
        }

        private new void OnDisable()
        {
            base.OnDisable();
            EventManager.Instance.RoundStart -= RoundStart;
        }


        private new void Update()
        {
            base.Update();
            _peekSheepTimer.Update();
            _peekSheepPeekTimer.Update();
        }

        private void RoundStart(object sender)
        {
            EventManager.Instance.RoundStart -= RoundStart;

            _peekSheepTimer.Enabled = true;
            _peekSheepTimer.TickAction = PeekSheepGracePeriodEnded;
        }

        private void PeekSheepGracePeriodEnded()
        {
            float time = GameplaySettings.PeekSheepTimeMax;
            DisableTimer(ref _peekSheepTimer, time);

            _peekSheepTimer.TickAction = PeekSheepTimerFinished;
            Peek();
        }

        private void PeekSheepTimerFinished()
        {
            float time = _peekSheepTimer.GetTime() * GameplaySettings.PeekSheepTimeMultiplier;
            time = Mathf.Clamp(time, GameplaySettings.PeekSheepTimeMin, GameplaySettings.PeekSheepTimeMax);
            DisableTimer(ref _peekSheepTimer, time);

            Peek();
        }

        private void Peek()
        {
            float time = _peekSheepPeekTimer.GetTime() * GameplaySettings.PeekSheepPeekMultiplier;
            time = Mathf.Clamp(time, GameplaySettings.PeekSheepPeekMin, GameplaySettings.PeekSheepPeekMax);
            DisableTimer(ref _peekSheepPeekTimer, time);

            _peekSheepPeekTimer.Enabled = true;
            DoorAnimator.SetBool("IsPeeking", true);
        }

        private void StopPeeking()
        {
            DoorAnimator.SetBool("IsPeeking", false);
            _peekSheepPeekTimer.Enabled = false;
            _peekSheepTimer.Enabled = true;
        }

        private void DisableTimer(ref Timer timer, float time)
        {
            timer.Enabled = false;
            timer.Reset();
            timer.SetTime(time);
        }
    }
}
            </code>
          </pre>
          <div class="code-snippet-button-container">
            <button type="button" @click="ToggleCodeSnippet(3)" class="code-snippet-button">Toggle Snippet</button>
            <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a>
          </div>
        </div>

        <div class="contribution-element">
          <p class="contribution-element-title">Additional features include but are not limited to</p>
          <ul>
            <li>Designing key game elements</li>
            <li>Returning of objects after falling on the ground</li>
            <li>Sheep looking behaviour</li>
            <li>Picture counting</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="team-section">
      <h2 class="section-header">The team</h2>
      <div class="basic-info">
        <p>Team size: 2 developers</p>
        <p>Programmers: 2</p>
      </div>

      <div class="team-container">
        <div class="team-container-box">
          <div class="team-element">
            <div class="team-name">
              <p>Kylian Dekker | Programmer</p>
              <a href="https://www.linkedin.com/in/kylian-dekker-26957015b/" target="_blank"><img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
            </div>
            <p class="team-portfolio"><a href="https://www.kyliandekker.com" target="_blank">www.kyliandekker.com</a></p>
          </div>

          <div class="team-element">
            <div class="team-name">
              <p>Stan Vogels | Programmer</p>
              <a href="https://www.linkedin.com/in/stanvogels/" target="_blank"><img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="learned-section">
      <h2 class="section-header">What I have learned form this project</h2>
      <div class="learned-container">
        <div class="learned-element">
          <h3>Making a VR game</h3>
          <p>This was my first time stepping into the exciting world of virtual reality.
            I was eager to learn and explore this new technology, but I quickly realized that it was not going to be an
            easy journey.
            Despite the steep learning curve, I was determined to get a grip on it. Luckily I had kylian as a team mate
            with prior experience
            in VR. This project teached me how to make a game interesting and playable for a VR game.
          </p>
        </div>
        <div class="learned-element">
          <h3>Quick concepting</h3>
          <p>Because this game was originally made as a game jam, we had to create concepts fast and didn't have time
            to go in depth for each feature. Even though we created the game into a full game, most of the mechanics are
            still the same
            as we created in those three days. This process really taught me how to make mechanics in a short amount of
            time, make decisions
            on the spot, "kill my darlings" and teamworking.</p>
        </div>
        <div class="learned-element">
          <h3>Keeping up Unity / C# skills</h3>
          <p>This project was made while I am still studying at Breda University of Applied Sciences (BUas), because on
            BUas we mostly
            code in C++ and Unreal Engine. This project was a good self-study project
            because it was refreshing and maintaining my Unity and C# skills. This will
            help me when I later in my career need to use these skills again.</p>
        </div>
        <div class="learned-element">
          <h3>Small team (2 members)</h3>
          <p>Working in teams is important to improve teamwork skills, but there are different
            kinds of teams. This team, with limited amount of people taught me being responsible
            for a lot of the work, being both a designer and a programmer, having confrontations we
            can't solve ourselves and not having a distinctive lead. All of these experiences improved
            my teamwork in small teams, but I can also use these in bigger teams.</p>
        </div>
      </div>
    </section>

    <div class="findcode-github">
      <h1>Find this project on</h1>
      <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
    </div>
    <section class="empty-footer"></section>
</div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';

import Image0 from '/src/assets/Image/Portfolio/ISC/Contributions/PeekSheep.jpg'
import Image1 from '/src/assets/Image/Portfolio/ISC/Contributions/SheepSpawning.jpg'
import Image2 from '/src/assets/Image/Portfolio/ISC/Contributions/Suspicousness.jpg'
import Image3 from '/src/assets/Image/Portfolio/ISC/Contributions/VotingSystem.jpg'
import Image4 from '/src/assets/Image/Portfolio/ISC/main.jpg'

export default {
  data() {
    return {
      name: 'ISC',
      mobile: false,
      images: [
          {
              src: Image0,
              index: 0
          },            
          {
              src: Image1,
              index: 1
          },
          {
              src: Image2,
              index: 2
          },
          {
              src: Image3,
              index: 3
          },
          {
              src: Image4,
              index: 4
          }
        ],
      contributionState: [false, false, false, false],
    }
  },
  beforeMount() {
    this.$emit('OpenNavBar');
  },
  mounted() {
    this.IsMobile();
    window.addEventListener('resize', this.IsMobile);
    Prism.highlightAll();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.IsMobile);
  },
  updated(){
    Prism.highlightAll();
  },
  methods: {
    IsMobile() {
      if (window.innerWidth <= 1000) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    },
    ToggleCodeSnippet(index){
      this.contributionState[index] = !this.contributionState[index];
      Prism.highlightAll();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = 'Stan Vogels | In sheeps clothing';
      }
    },
  },
  components:{
    CarrouselComp,
  }
}
</script>

<style>
.project-container {
  top: 0;
  background-color: white;
  width: 75%;
  position: absolute;
  margin-top: 100px;
  margin-left: 12.5%;
  height: 90vh;
  overflow-y: scroll;
}

.project-container::-webkit-scrollbar {
  display: none;
}

.header-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/src/assets/Image/Portfolio/ISC/Header.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 16vw;
  min-height: 100px;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  text-align: center;

  display: table;
}

.header-text {
  display: table-cell;
  vertical-align: middle;
}

.header-title {
  width: 100%;
  margin-left: calc(50% - 50%);
  color: white;
  font-weight: 600;
  font-style: normal;
  font-size: 3.5vw;
  line-height: 3vw;
}

.header-subtitle {
  font-weight: 400;
  font-style: normal;
  color: white;
  position: relative;
  font-size: 1.4vw;
}

.project-video {
  width: 70%;
  height: 22.5vw;
  margin-left: 15%;
  border-radius: 20px;
  margin-top: -4vw;
  object-fit: cover;
}

.indv-project-bubbles-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  width: 70%;
}

.indv-project-bubbles {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 10px;
  color: black;
  margin-right: 5px;
  margin-top: 5px;

  display: flex;
  justify-content: center;
  align-content: center;
}

.material-symbols-outlined {
  margin-right: 5px;
}

.carousel-comp{
  margin-top: 50px;
  width: 80%;
  margin-left: 10%;
}

.project-text {
  margin-top: 25px;
  font-weight: 400;
  font-style: normal;
  width: 70%;
  margin-left: 15%;
  font-size: 1.4vw;
  line-height: normal;
  text-align: center;
}

.section-header {
  font-weight: 600;
  font-size: 30px;
}

.software-skills {
  margin-top: 50px;
  margin-left: var(--project-offset-left);
  width: 80%;
}

.software-skills-icons{

}

.software-skill-element {
  width: 175px;
  display:inline-block;
  height: auto;
  border: 2px dotted rgb(0, 0, 0);
  border-radius: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.software-skill-image{
  width: 50%;
  display:block;
  margin:auto;
  margin-top: 10px; 
}

.software-skill-title{
  text-align: center;
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  font-weight: 800;
}

.software-skill-text{
  text-align: center;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
}

.contribution-section {
  margin-top: 100px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.contribution-element-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px 5%;
}

.contribution-element{
  display: flex;
  flex-direction: column;
}

.contribution-element-title {
  font-weight: 400;
  font-size: 25px;
  font-style: italic;
}

.contribution-image {
  width: 100%;
  overflow: hidden;
}

.contribution-text {
  font-size: 20px;
  flex: 1;
}

.code-snippet{
  max-width: 100%;
  max-height: 200px;
  margin-top: auto;
}

.expanded-code-snippet{
  max-height: 600px;
}

.code-snippet-button-container{
  display: flex;
  justify-content: center;
}

.code-snippet-button{
  border: 2px solid black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 120px;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
}

.team-section {
  margin-top: 50px;
  margin-left: var(--project-offset-left);
}

.team-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

.team-element {
  margin-top: 10px;
  height: 40px;
}

.team-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.team-name>p {
  font-weight: 600;
}

.team-name>a {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.team-portfolio {
  margin-top: -5px;
  font-size: 12px;
}

.learned-section {
  margin-top: 50px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.learned-element>h3 {
  font-size: 25px;
}

.learned-element>p {
  font-size: 20px;
  font-style: italic;
}

.learned-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px;
}


.findcode-github {
  width: 70%;
  margin-left: 15%;
  font-style: normal;
  margin-top: 50px;
  text-align: center;
  font-size: 10px;
}

.findcode-github>h1 {
  font-weight: 800;
  margin-bottom: 0;
}

.findcode-github>a>img {
  margin-top: 0;
  width: 300px;
}

.itchio{
  margin-top: 50px;
  width: 40%;
  margin-left: 27.5%;
}

.empty-footer {
  margin-top: 50px;
  height: 100px;
  width: 100%;
  background-color: #1A1A1A;
}

.empty-space {
  height: 100px;
}

@media (max-width: 1200px) {
  .software-skill-element {
    width: 150px;
    margin-right: 15px;
  }
}

@media (max-width: 1000px) {
  .contribution-element-container {
    margin-top: 2vw;
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    grid-template-rows: repeat(4, auto);
    grid-gap: 25px 5%;
  }

  .project-text {
    font-size: calc(15px + 0.8vw);
  }

  .section-header {
    font-size: calc(12px + 1vw);
  }

  .contribution-section {
    margin-top: 8vw;
  }

  .contribution-element {
    margin-bottom: 10px;
  }

  .team-section {
    margin-top: 20px;
  }

  .team-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }

  .learned-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 20px;
  }

  .findcode-github>a>img {
    width: 200px;
  }

  .project-container {
    margin-top: 100px;
    width: 90%;
    margin-left: 5%;
  }

  .project-video {
    height: 40vw;
    max-height: 450px;
    margin-left: 15%;
    border-radius: 20px;
    margin-top: -4vw;
    object-fit: cover;
  }

  .itchio{
  width: 80%;
  margin-left: 10%;
}
}

@media (max-width: 600px) {
  .carousel-comp{
    margin-top: 50px;
    width: 100%;
    margin-left: 0%;
  }

  .software-skill-element {
    width: 45%;
    margin-right: 2.5%;
  }
}
</style>
import Buy from "../components/commons/Buy";
import {
  GetStarted,
  Guarantee,
  Hero,
  SocialSection,
  WhyUs,
} from "../components/Home";

const Home = () => {
  return (
    <>
      <Hero />
      <SocialSection />

      {/* Section Heading */}
      <div className="custom-container px-4 md:px-0">
        <p className="heading text-center text-xl md:text-3xl leading-snug">
          CompanyName's <span className="text-gradient">Services</span>
        </p>
      </div>

      {/* Intro Paragraph */}
      <p className="text-base sm:text-lg text-[#484f5e] font-medium w-full max-w-3xl text-center mx-auto my-5 px-4">
        Amplify your social media impact with Buzzoid's comprehensive Instagram
        services. Our user-friendly platform delivers real followers, likes,
        views, and comments in just a few clicks. Experience rapid, secure
        growth for your accounts with our top-rated engagement packages.
      </p>

      {/* BUY SECTIONS */}
      <Buy
        title="Why Are Instagram Followers Important?"
        description="A high follower count is the number one sign that an Instagram user is popular and influential..."
        subtitle="Key Reasons to Buy Instagram Followers"
        features={[
          "100% legitimate followers that keep your account safe",
          "Premium and VIP follower upgrades available",
          "Packages of 10-200,000 real followers available",
          "Premium and VIP follower upgrades available",
          "Immediate delivery",
          "Very affordable prices",
          "Premium and VIP follower upgrades available",
        ]}
        cta={"Buy Instagram Followers"}
        bg={"bg-gradient-to-b from-[#e0f2ff] to-white"}
        cardsFirst={false}
        card1Title={"Why Are Instagram Followers Important?"}
        card1Content={"Your purchased followers will boost your Insta follower count..."}
        card2Title={"Key Reasons to Buy Instagram Followers"}
        card2Content={"Just as importantly, your new followers tell the system’s algorithms..."}
      />

      <Buy
        title="Why Are Instagram Likes Important?"
        description="Likes represent engagement and trust. Boost yours quickly."
        subtitle="Why Buy Instagram Likes?"
        features={[
          "Real likes from active accounts",
          "Split likes across multiple posts",
          "Delivery in minutes",
          "Boost your profile visibility",
        ]}
        cta={"Buy Instagram Likes"}
        bg={"bg-gradient-to-b from-[#fff0e5] to-white"}
        cardsFirst={true}
        card1Title={"Why Are Instagram Likes Important?"}
        card1Content={"Likes are the simplest form of engagement and boost visibility..."}
        card2Title={"Instant Engagement"}
        card2Content={"High likes can increase algorithm exposure and attract more followers."}
      />

      <Buy
        title="Why Are Instagram Views Important?"
        description="Video content needs views to gain traction. We help you get there."
        subtitle="Get More Views Today"
        features={[
          "Fast delivery of video views",
          "Safe and algorithm-friendly",
          "Affordable pricing",
        ]}
        cta={"Buy Instagram Views"}
        bg={"bg-gradient-to-b from-[#eff0fc] to-white"}
        cardsFirst={false}
        card1Title={"Boost Reel & Story Reach"}
        card1Content={"Views help Instagram promote your videos to a wider audience."}
        card2Title={"Why Buy Views?"}
        card2Content={"View counts are critical for appearing credible and influential."}
      />

      <Buy
        title="Why Comments Drive Credibility"
        description="Engage authentically with custom comments."
        subtitle="Buy Real Instagram Comments"
        features={[
          "Customizable comments",
          "Real human interaction",
          "Boost social proof",
        ]}
        cta={"Buy Instagram Comments"}
        bg={"bg-gradient-to-b from-[#f2e5ff] to-white"}
        cardsFirst={true}
        card1Title={"Engagement Builds Trust"}
        card1Content={"Accounts with comments look more active and trustworthy."}
        card2Title={"Why Buy Comments?"}
        card2Content={"Promotes meaningful engagement and boosts algorithm visibility."}
      />

      <Buy
        title="Tiktok Followers Matter"
        description="Build your TikTok community with real followers."
        subtitle="Boost Your Social Presence"
        features={[
          "Authentic TikTok followers",
          "Quick growth, real results",
          "Increase visibility and trust",
        ]}
        cta={"Buy Tiktok Followers"}
        bg={"bg-gradient-to-b from-[#e0f2ff] to-white"}
        cardsFirst={false}
        card1Title={"Why Buy TikTok Followers?"}
        card1Content={"Followers help grow reach, social proof, and attract more traffic."}
        card2Title={"Be Seen More"}
        card2Content={"More followers means more chances of viral growth."}
      />

      <Buy
        title="Get More TikTok Likes"
        description="Boost your engagement with likes that count."
        subtitle="Boost Your Content Performance"
        features={[
          "Genuine TikTok likes",
          "Delivery in minutes",
          "Strengthen engagement signals",
        ]}
        cta={"Buy Tiktok Likes"}
        bg={"bg-gradient-to-b from-[#fff0e5] to-white"}
        cardsFirst={true}
        card1Title={"Engagement is King"}
        card1Content={"More likes means more algorithm reach and influence."}
        card2Title={"Why Buy Likes?"}
        card2Content={"It's the fastest way to kickstart your content."}
      />

      <Buy
        title="Get Real TikTok Views"
        description="Views attract attention and credibility. Start growing now."
        subtitle="Buy TikTok Video Views"
        features={[
          "Authentic video plays",
          "Boost reel & story exposure",
          "Fast delivery guaranteed",
        ]}
        cta={"Buy Tiktok Views"}
        bg={"bg-gradient-to-b from-[#eff0fc] to-white"}
        cardsFirst={false}
        card1Title={"Why Views Matter?"}
        card1Content={"More views = more authority = more potential followers."}
        card2Title={"Start Small, Grow Big"}
        card2Content={"Start with 1K+ views and scale as your page grows."}
      />

      {/* Final Sections */}
      <WhyUs />
      <Guarantee />
      <GetStarted />
    </>
  );
};

export default Home;

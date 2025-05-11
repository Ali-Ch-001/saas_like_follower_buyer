import { ImageSection } from "../commons";

const SocialSection = () => {
  return (
    <div className="primary-gradient">
      <div className="custom-container space-y-20 py-20">
        <ImageSection
          heading={"Social Media Visibility"}
          title={
            "Instagram and TikTok have become so popular worldwide that it’s almost impossible for users to earn widespread visibility and interaction with the content that they create."
          }
          des={
            "But when users see accounts and posts with large numbers of followers, views, likes, and comments, they’re likely to stop and see what the fuss is about."
          }
          imgPosition="right"
        />
        <ImageSection
          heading={"Accelerated Profile Growth"}
          title={
            "That gets more and more people engaged with your Instagram and TikTok pages, making you more popular, more influential, and more important on the apps."
          }
          des={
            "CompanyName can make it happen! Our IG or TikTok engagement packages arrive immediately, your account stays safe, and you see fast organic growth for your profile, pages, and posts!"
          }
          imgPosition="left"
        />
      </div>
    </div>
  );
};

export default SocialSection;

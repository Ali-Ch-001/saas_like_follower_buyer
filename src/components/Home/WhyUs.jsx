import { ImageSection } from "../commons";

const WhyUs = () => {
  return (
    <div className="primary-gradient">
      <div className="custom-container space-y-20 py-20">
        <div className="space-y-5">
          <p className="heading text-center">
            Why <span className="text-gradient">CompanyName</span>
          </p>
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-center text-primary-text-color font-medium text-lg">
              We're not the only provider offering Instagram interactions for
              sale. We're the best, though, and we want you to feel comfortable
              trying our services.
            </p>
          </div>
        </div>
        <ImageSection
          heading={"Industry-Leading Services"}
          title={
            "CompanyName has been delivering high-quality, real Instagram followers, likes, and video views for more than a dozen years, and we’ve been the top-ranked Instagram service provider ever since. We’ve also been featured as a trusted IG service in publications like Men’s Journal, US Weekly, and 303 Magazine."
          }
          des={
            "When TikTok was first open for American and European signups, we added TikTok services to our menu almost immediately and rapidly became the highest-rated TikTok provider as well."
          }
          imgPosition="right"
        />
        <ImageSection
          heading={"Trusted Growth Experts"}
          title={
            "Since we began operations, we've helped countless users grow their social media presence across platforms, delivering billions of Instagram interactions and hundreds of thousands of TikTok engagements. Our diverse community includes individual content creators and everyday users looking to expand their reach and connect with others who share their interests."
          }
          des={
            "They all trust CompanyName because we deliver the best results available from any social media service provider. That’s all thanks to our expert and experienced staff, who understand the fastest and most effective ways to generate organic account growth, safely and according to all apps’ terms and conditions."
          }
          imgPosition="left"
        />
      </div>
    </div>
  );
};

export default WhyUs;

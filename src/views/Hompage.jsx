import { FeedbackContainer, Navigation, InfoBar } from "../components";

export default function Homepage() {
  return (
    <div className="flex-container">
      <Navigation />
      <div className="container">
        <InfoBar />
        <FeedbackContainer />
      </div>
    </div>
  );
}

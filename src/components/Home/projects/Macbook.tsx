import macbookStyling from "@/components/Home/projects/macbookStyling.css";

export default function Macbook() {
  return (
    <div className="mbp-mockup-wrapper">
      <div className="mbp-container">
        <div className="mbp-display with-glare">
          <div className="display-edge">
            <div className="bezel">
              <div className="display-camera"></div>
              <div className="display-frame">
                <iframe src="https://codepen.io" allowFullScreen></iframe>
              </div>
              <div className="below-display">
                <div className="macbookpro"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mbp-keyboard">
          <div className="front">
            <div className="opener-left"></div>
            <div className="opener-right"></div>
          </div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <div className="mbp-shadow">
            <div className="shadow-left"></div>
            <div className="shadow-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from 'react';

export default function LightWidget() {
  useEffect(() => {
    const loadLightWidgetScript = () => {
      if (!document.getElementById('lightwidget-script')) {
        const script = document.createElement('script');
        script.id = 'lightwidget-script';
        script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadLightWidgetScript();
  }, []);

  return (
    <iframe
      title="socmed"
      src="https://cdn.lightwidget.com/widgets/3278794f7a315da8b50dce1f7f15ec8a.html"
      scrolling="no"
      // allowTransparency={true}
      className="lightwidget-widget mt-10"
      style={{ width: '100%', border: '0', overflow: 'hidden' }}
    ></iframe>
  );
}

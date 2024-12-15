import { useEffect, useState } from "react";
import "./App.scss";
import { getWidgets } from "./services/widgetApi";
import { IWidget, WidgetColor } from "./types/widget.interface";
import WidgetList from "./components/WidgetList/WidgetList";

function App() {
  const [widgets, setWidgets] = useState<IWidget[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWidgets();
  }, []);

  const fetchWidgets = async () => {
    try {
      const widgets = await getWidgets();
      setWidgets(widgets);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = (id: number) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id
          ? { ...widget, active: !widget.active }
          : { ...widget, active: false }
      )
    );
  };

  const handleToggleLinked = (id: number, linked: boolean) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, linked } : widget
      )
    );
  };

  const handleSelectColor = (id: number, color: WidgetColor) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, selectedColor: color } : widget
      )
    );
  };

  return (
    <main>
      {isLoading ? (
        <div className="loading-container">Loading...</div>
      ) : (
        <WidgetList
          widgets={widgets}
          onToggleActive={handleToggleActive}
          onToggleLinked={handleToggleLinked}
          onSelectColor={handleSelectColor}
        />
      )}
    </main>
  );
}

export default App;

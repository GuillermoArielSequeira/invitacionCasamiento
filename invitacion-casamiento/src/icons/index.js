import church from "./church";
import glasses from "./glasses";
import costume from "./costume";

const icon = {
  church,
  glasses,
  costume,
};

export const getIcon = ({ name }) => {
  const Component = icon[name];

  return (
    Component && (
      <Component styles={{ width: "60%", height: "60%", color: "white" }} />
    )
  );
};

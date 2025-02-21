import ListItem from "./ListItem";
const SimpleList = ({ data, onDelete ,onAction}) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="app-list bg-light">
            <ListItem
              onDelete={() => onDelete(item.id)}
              title={item.title}
              desc={item.desc}
              isActive={item.isActive}
              onAction={onAction}
            />
          </div>
        );
      })}
    </>
  );
};

export default SimpleList;

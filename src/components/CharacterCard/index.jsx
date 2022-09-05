export const CharacterCard = (props) => {
  const {id, image, name} = props;
  return (
    <div key={id}>
      <img src={image} alt="" width="80px" height="80px" />
      <p>{name}</p>
    </div>
  )
}
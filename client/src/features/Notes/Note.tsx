type Props = {
  text: string;
};

export default function Note({ text }: Props) {
  return <p>{text}</p>;
}

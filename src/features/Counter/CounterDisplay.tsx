
type CounterDisplayProps = {
  result: number;
};
export default function CounterDisplay({ result }: CounterDisplayProps) {

  return (
    <p>Valeur du compteur : {result}</p>
  );
}
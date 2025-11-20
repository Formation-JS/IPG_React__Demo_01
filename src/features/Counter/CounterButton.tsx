
type CounterButtonProps = {
  step?: number;
  onCounterPress?: (value: number) => void
};
export default function CounterButton({step = 1, onCounterPress = () => {}} : CounterButtonProps) {

  const handleIncr = () => {
    // ↓ Déclanche le code du composant parent
    onCounterPress(step);
  }

  const handleDecr = () => {
    onCounterPress(-step);
  }

  return (
    <div>
      <button onClick={handleIncr}>+{step}</button>
      <button onClick={handleDecr}>-{step}</button>
    </div>
  );
}

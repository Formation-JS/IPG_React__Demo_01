// Auto-completion des fichiers: Path Intellisense
import style from './Welcome.module.css';
// → { 'exemple-demo' : '_exemple-demo_l35cq_3' }


type WelcomeProps = {
  firstname: string;
  lastname?: string;
};

export default function Welcome({ 
  firstname,
  lastname = 'Dupont'
} : WelcomeProps) {

  return (
    <p className={style['exemple-demo']}>
      Bonjour {firstname} {lastname} !
    </p>
  );
}
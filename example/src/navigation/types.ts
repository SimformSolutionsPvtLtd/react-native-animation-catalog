//Navigation Type
interface NavProps {
  navigate: (args: string) => void;
  goBack: () => void;
  pop: () => void;
}

export { NavProps };

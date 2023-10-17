interface RenderItems {
  onLeftSwipe: () => void;
  onRightSwipe: () => void;
  item: {
    id: number;
    image: number;
  };
}

export { RenderItems };

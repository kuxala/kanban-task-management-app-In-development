const Overlay = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
  );
};

export default Overlay;

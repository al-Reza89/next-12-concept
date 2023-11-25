interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col ">
      {children}
    </div>
  );
};

export default Container;

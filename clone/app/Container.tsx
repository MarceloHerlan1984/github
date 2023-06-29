interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[144px] px-7 mx-auto xl:px-20 md:px-8 ">{children}</div>
}
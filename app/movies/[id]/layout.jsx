const RootLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start gap-2">
      <main>{children}</main>
      <aside className="w-[20rem]">lorem200</aside>
    </div>
  );
};

export default RootLayout;

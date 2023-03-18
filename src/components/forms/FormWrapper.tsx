import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function FormWrapper({ title, children }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default FormWrapper;

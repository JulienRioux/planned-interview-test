import React, { ReactNode } from "react";
import { getProviders } from "./providers";

// Exporting the providers list into the same file
export { getProviders };

export default function ReduceProviders({
  providers,
  children,
}: {
  providers: any[];
  children: ReactNode;
}) {
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}

export const ProvidersWrapper = ({ children }: { children: ReactNode }) => (
  <ReduceProviders providers={getProviders()}>{children}</ReduceProviders>
);

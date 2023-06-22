import React, { ReactNode } from "react";
import { getProviders } from "./providers";

// Exporting the providers list into the same file
export { getProviders };

// MAking things cleaner when there is a lot of providers.
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

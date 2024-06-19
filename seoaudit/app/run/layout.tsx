'use client'
import React, { ReactNode } from 'react';
import { OBProvider } from '../contexts/Result';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <OBProvider>

                <main>
                    {children}
                </main>
            </OBProvider>

        </div>
    );
};

export default Layout;
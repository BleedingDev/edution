import dynamic from 'next/dynamic';

export const ExcalidrawEditor = dynamic(() => import('./ExcalidrawInput').then((module) => module.ExcalidrawInput), {
    ssr: false, loading: () => <p>Loading...</p>
})
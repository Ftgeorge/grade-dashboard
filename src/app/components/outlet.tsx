import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Outlet = () => {
    const router = useRouter();

    const Component = dynamic(() => import(`../pages/${router.asPath}`), {
        ssr: false,
    });

    return <Component />;
};

export default Outlet;
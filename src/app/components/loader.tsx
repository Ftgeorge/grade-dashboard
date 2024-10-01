// Loader.tsx
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
    loading: boolean;
    size?: number;
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ loading, size = 20, color = "white" }) => {
    return <ClipLoader loading={loading} size={size} color={color} />;
};

export default Loader;

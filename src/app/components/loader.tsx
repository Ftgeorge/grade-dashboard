// Loader.tsx
import { ClipLoader } from 'react-spinners';
import { LoaderProps } from '../data/list';


const Loader: React.FC<LoaderProps> = ({ loading, size = 20, color = "white" }) => {
    return <ClipLoader loading={loading} size={size} color={color} />;
};

export default Loader;

// Login props

import { ChartData, ChartOptions } from "chart.js";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface SignInProps { }

export interface ForgetPasswordProps { }

export interface OtpProps { }

export interface NewPasswordProps { }

export interface MenuItem {
    label?: string;
    icon?: JSX.Element;
    path?: string;
    group?: string;
}



// Buttons
export interface ActionButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export interface FilterButtonProps extends React.ComponentProps<'button'> {
    label: string;
    count: number;
    active: boolean;
}

export interface OauthButtonProps {
    imageClassname?: string;
    onClick: () => void;
    className?: string;
    ImageSource: StaticImageData | string;
}

export interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
}


// Card
export interface AlertNotificationCardProps {
    type: 'alert' | 'notification';
    message: string;
    username?: string; // optional for notifications
    studentId?: string; // optional for notifications
    profileImage?: string; // optional for alerts
    time: string;
}

export interface DashboardCardProps {
    icon: IconType;
    count: number;
    label: string;
    borderColor: string;
    bgColor: string;
    textColor: string;
}

export interface RecentActivityLogProps {
    message: string;
    time: string;
}

//Forms
export interface OffenseDetailFormProps {
    profileImage: string;
    studentName: string;
    studentId: string;
    timestamp: string;
    offenseType: string;
    color: string;
    status: string;
    index: number;
}

//Graphs
export interface StudentActivityProps {
    barData: ChartData<"bar">;
    barOptions: ChartOptions<"bar">;
    doughnutData: ChartData<"doughnut">;
    doughnutOptions: ChartOptions<"doughnut">;
};


//inputs
export interface AuthInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string | null;
    errorMessage?: string;
    type?: string;
    onClick?: () => void;
    showIcon?: boolean;
    showPassword?: boolean;
}

//search bar
export interface SearchBarProps {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Table
export interface TableContentFormProps {
    profileImage: string;
    studentName: string;
    studentId: string;
    timestamp: string;
    offenseType: string;
    color: string;
    status: string;
    email?: string;
}

export interface TableContentTextProps {
    placeholder: string;
}

export interface TableHeaderTextProps {
    placeholder: string;
}

//Text
export interface FooterTextProps {
    className?: string;
    placeholder: string | React.ReactNode;
    onClick?: () => void
}

export interface HeaderTextProps {
    placeholder?: string;
}

export interface PrimaryTextProps {
    placeholder?: string;
    className?: string;
}

export interface SubHeaderTextProps {
    className?: string;
    placeholder: string | React.ReactNode;
}

//Loader
export interface LoaderProps {
    loading: boolean;
    size?: number;
    color?: string;
}

//MockData
export interface Student {
    id: number;
    profileImage: string;
    studentName: string;
    studentId: string;
    email: string;
    timestamp: string;
    offenseType: string;
    status: "Pending Review" | "Terminated" | "blocked" | "active" | "suspended" | "Resolved" | "Under Investigation" | "Under Review";
    subjectHistory: {
        subject: string;
        score: string;
        date: string;
    }[];
    actionHistory: {
        description: string;
        date: string;
    }[];
    dateOfBirth?: string;
    phoneNumber?: string;
}

//Constants
export interface HeaderProps {
    title: string;
    Icon: IconType;
};
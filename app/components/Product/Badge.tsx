interface IBadgeProps {
    type: "discount" | "new" | "sold-out";
    content?: string;
}

export const Badge = ({ type, content }: IBadgeProps) => {

    const getBadgeContent = () => {
        switch (type) {
            case "discount":
                return content ? `-${content}%` : "";
            case "new":
                return "New";
            case "sold-out":
                return "Sold Out";
            default:
                return "";
        }
    };

    const getBadgeClass = () => {
        switch (type) {
            case "discount":
                return "bg-red-500";
            case "new":
                return "bg-teal-500";
            case "sold-out":
                return "bg-red-500";
            default:
                return "";
        }
    };

    return (
        <span className={`pill ${getBadgeClass()}`}>
            {getBadgeContent()}
        </span>
    );
};
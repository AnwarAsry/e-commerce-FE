interface ImgBoxProps {
    imgUrl: string;

    selectedImage: boolean;
    onClick: () => void;
}

export const ImgBox = ({ selectedImage, imgUrl, onClick }: ImgBoxProps) => {
    return (
        <button
            onClick={onClick}
            className={`border-2 rounded-xl overflow-hidden aspect-square cursor-pointer transition-colors
                ${selectedImage
                    ? "border-gray-950"
                    : "border-transparent hover:border-gray-300"
                }`
            }
        >
            <img
                src={imgUrl}
                alt="image box"
                className="w-full h-full object-cover"
            />
        </button>
    );
};
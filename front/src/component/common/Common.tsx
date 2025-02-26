export function ErrorMessage({ message }) {
    if (!message) return null;
    return <p className="text-[#FF0000] mt-2">{message}</p>;
}

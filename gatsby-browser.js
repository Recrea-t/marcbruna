import "./src/styles/global.scss"

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
        await import(`intersection-observer`);
    }
}

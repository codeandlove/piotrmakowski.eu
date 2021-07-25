export const downloadFile = (file) => {
    window.open(`${process.env.PUBLIC_URL}/download/${file}`, "_blank");
}

export const gotoSection = (section) => window.location.hash = '#'+section;

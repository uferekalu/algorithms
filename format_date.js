function formatDate(date) {
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    const formattedDate = new Date(date).toLocaleDateString('en-US', options)
    return formattedDate
}

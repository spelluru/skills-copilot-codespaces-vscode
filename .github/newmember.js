function skillsMember(skills) {
    return skills.map(skill => {
        return `* ${skill}`
    }).join('\n')
}
export default function useTheme() {
    const theme = useState('theme', () => 'light')

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    }

    return {
        theme, toggleTheme
    }
}
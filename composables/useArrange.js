export default function useArrange() {
    const arrange = useState('arrange', () => 'vertical')

    function toggleArrange() {
        arrange.value = arrange.value === 'vertical' ? 'horizontal' : 'vertical';
    }

    return {
        arrange, toggleArrange
    }
}
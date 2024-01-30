import { useThemeContext } from '@/context/ThemeProvider'

interface QuantitySelectProps {
    id: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const QuantitySelect = ({ id, onChange }: QuantitySelectProps) => {

    const { isDarkMode } = useThemeContext()

    return (        
        <select
            id={id}
            onChange={onChange}
            style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
            className={`w-full p-2 rounded-lg shadow-2xl cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select> 
    )
}

export default QuantitySelect
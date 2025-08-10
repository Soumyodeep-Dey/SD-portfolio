// ThemeBtn.jsx
import { useTheme } from '../contexts/Theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme() || {};

    const handleToggle = (e) => {
        e.currentTarget.checked ? darkTheme() : lightTheme();
    };

    return (
        <div className="relative">
            <input
                id="theme-toggle"
                type="checkbox"
                className="sr-only"
                checked={themeMode === 'dark'}
                onChange={handleToggle}
            />
            <label
                htmlFor="theme-toggle"
                className="flex items-center cursor-pointer w-16 h-9 bg-gradient-to-r from-light-300 via-light-400 to-light-500 dark:from-dark-400 dark:via-dark-600 dark:to-dark-700 rounded-full p-1 shadow-lg border-2 border-light-300 dark:border-dark-400 transition-all duration-300 ease-in-out"
                aria-label="Toggle Theme"
            >
                {/* Sun Icon */}
                <svg
                    className={`w-5 h-5 text-yellow-400 drop-shadow-md transition-opacity duration-300 ${themeMode === 'dark' ? 'opacity-0' : 'opacity-100'
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                    />
                </svg>

                {/* Toggle Circle */}
                <div
                    className={`absolute w-7 h-7 bg-gradient-to-br from-light-50 via-light-200 to-light-100 dark:from-dark-50 dark:via-dark-200 dark:to-dark-100 rounded-full shadow-lg border border-light-300 dark:border-dark-400 transform transition-transform duration-300 ease-in-out ${themeMode === 'dark' ? 'translate-x-7' : 'translate-x-0'
                        }`}
                    style={{ boxShadow: themeMode === 'dark' ? '0 0 8px #6366f1' : '0 0 8px #fbbf24' }}
                />

                {/* Moon Icon */}
                <svg
                    className={`w-5 h-5 text-indigo-400 ml-auto drop-shadow-md transition-opacity duration-300 ${themeMode === 'dark' ? 'opacity-100' : 'opacity-0'
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </label>
        </div>
    );
}
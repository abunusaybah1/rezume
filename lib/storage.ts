import { DEFAULT_DATA } from "./defaults";
import { PortfolioData } from "./types";

const KEY = "rezume_data"

export function saveData(data:PortfolioData) {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(data))
}

export function loadData(): PortfolioData{
    if (typeof window === "undefined") return DEFAULT_DATA;
    const rawData = localStorage.getItem(KEY);
    if (!rawData) return DEFAULT_DATA
    
    try {
        return JSON.parse(rawData) as PortfolioData
    } catch {
        return DEFAULT_DATA
    }
}

export function resetData() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY)
}
// Service data for Garage Reco

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Oil Change",
    description: "Complete oil and filter change with premium synthetic or conventional oil",
    icon: "Droplet",
    price: "$49.99",
    duration: "30 min"
  },
  {
    id: 2,
    title: "Brake Service",
    description: "Comprehensive brake inspection, pad replacement, and rotor resurfacing",
    icon: "CircleStop",
    price: "$149.99",
    duration: "2 hours"
  },
  {
    id: 3,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify engine issues and error codes",
    icon: "Gauge",
    price: "$89.99",
    duration: "1 hour"
  },
  {
    id: 4,
    title: "Tire Service",
    description: "Tire rotation, balancing, alignment, and pressure check",
    icon: "CircleDot",
    price: "$79.99",
    duration: "1 hour"
  },
  {
    id: 5,
    title: "Battery Check",
    description: "Battery testing, cleaning terminals, and replacement if needed",
    icon: "Zap",
    price: "$29.99",
    duration: "20 min"
  },
  {
    id: 6,
    title: "AC Service",
    description: "Air conditioning system check, recharge, and leak detection",
    icon: "Wind",
    price: "$119.99",
    duration: "1.5 hours"
  },
  {
    id: 7,
    title: "Transmission Service",
    description: "Transmission fluid change and complete system inspection",
    icon: "Cog",
    price: "$199.99",
    duration: "2 hours"
  },
  {
    id: 8,
    title: "General Inspection",
    description: "Complete vehicle inspection covering all major systems and components",
    icon: "Search",
    price: "$59.99",
    duration: "45 min"
  }
];

export const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Van",
  "Sports Car",
  "Electric Vehicle"
];

// Mock booking data for admin dashboard
export interface Booking {
  id: number;
  customerName: string;
  phone: string;
  vehicleType: string;
  service: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

export const mockBookings: Booking[] = [
  {
    id: 1,
    customerName: "John Doe",
    phone: "(555) 123-4567",
    vehicleType: "Sedan",
    service: "Oil Change",
    date: "2026-01-08",
    time: "10:00",
    status: "confirmed"
  },
  {
    id: 2,
    customerName: "Jane Smith",
    phone: "(555) 234-5678",
    vehicleType: "SUV",
    service: "Brake Service",
    date: "2026-01-08",
    time: "14:00",
    status: "pending"
  },
  {
    id: 3,
    customerName: "Mike Johnson",
    phone: "(555) 345-6789",
    vehicleType: "Truck",
    service: "Engine Diagnostics",
    date: "2026-01-09",
    time: "09:00",
    status: "confirmed"
  },
  {
    id: 4,
    customerName: "Sarah Williams",
    phone: "(555) 456-7890",
    vehicleType: "Sedan",
    service: "Tire Service",
    date: "2026-01-09",
    time: "11:30",
    status: "completed"
  },
  {
    id: 5,
    customerName: "David Brown",
    phone: "(555) 567-8901",
    vehicleType: "Electric Vehicle",
    service: "Battery Check",
    date: "2026-01-10",
    time: "13:00",
    status: "pending"
  }
];

export const stats = {
  yearsExperience: 15,
  vehiclesServiced: 5000,
  satisfiedCustomers: 4800,
  certifiedTechnicians: 8
};

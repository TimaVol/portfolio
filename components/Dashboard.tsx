import styles from "../styles/components/Dashboard.module.scss";

interface DashboardType {
  items: { id: number }[];
}

export default function Dashboard({ items }: DashboardType) {
  return (
    <div className={styles.dashboard}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          {item.id} item
        </div>
      ))}
    </div>
  );
}

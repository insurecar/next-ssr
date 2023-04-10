import classNames from "classnames";
import { Input } from "../Input/Input";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import cn from "classnames";
import { Button } from "../Button/Button";
import { useState } from "react";
import GlassIccon from "./Glass.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    e.key === "Enter" && goToSearch();
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        onChange={({ target: { value } }) => setSearch(value)}
        onKeyDown={handleKeyDown}
        value={search}
        placeholder="Пошук..."
      />
      <Button
        appearence="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIccon />
      </Button>
    </div>
  );
};

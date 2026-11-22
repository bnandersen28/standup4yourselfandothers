import BookCatalog from "@/components/books/BookCatalog";
import PageTitle from "@/components/ui/PageTitle";
import RainbowLine from "@/components/ui/RainbowLine";
import styles from "./books.module.css";

export default function BooksPage() {
    return (
        <>
        <RainbowLine />

        <main className={styles.bookCatalogBody}>
            <PageTitle
                firstWord="Book"
                secondWord="Catalog"
                description="Discover our collection of books for all ages that we believe support our mission to teach children about diversity and inclusion."
            />
            <BookCatalog />
        </main>
        <RainbowLine />
        </>
    );
}
'use client';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  Loader2Icon,
  MenuIcon,
  PlusCircleIcon,
  Settings2Icon,
  XIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DirectionAwareTabs } from '@/components/ui/direction-aware-tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { SortableList, SortableListItem } from '@/components/ui/sortable-list';
import { cn } from '@/libs/utils';
import { type Article, categories, draftArticles } from '@/utils/Mock';

// TODO: enable params in this page
type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const routes = [
  { name: 'Analyze', path: '/analyze' },
  { name: 'Menus', path: '/menus' },
  { name: 'Orders', path: '/orders' },
  { name: 'Customers', path: '/customers' },
  { name: 'Promotion', path: '/promotion' },
];

const truncateWord = (str: string, length: number) => {
  if (str.length > length) {
    return `${str.slice(0, length)}...`;
  }
  return str;
};

const Navigation = () => (
  <nav className="h-28 md:h-16 px-4 md:px-6 flex justify-between items-center">
    {/* Logo */}
    <Link href="/">
      <h1 className="text-2xl font-bold">Menu Cool</h1>
    </Link>

    {/* Menu (Desktop) */}
    <ul className="hidden md:flex space-x-6 text-sm font-medium">
      {routes.map((route) => (
        <li key={route.name}>
          <Link
            href={route.path}
            className="hover:text-secondary transition-colors"
          >
            {route.name}
          </Link>
        </li>
      ))}
      <Link href="/logout" className="hover:text-red-500 transition-colors">
        Logout
      </Link>
    </ul>

    {/* Hamburger Menu (Mobile) */}
    <Button size="icon" className="md:hidden" variant="ghost">
      <MenuIcon />
    </Button>
  </nav>
);

const CategoryBadge = ({
  categoryName,
  isSelected,
  onClick,
}: {
  categoryName: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    className={`rounded-full border px-3 py-1 mr-2 my-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform transform ${
      isSelected
        ? 'scale-105 bg-primary text-primary-foreground shadow-md'
        : 'border-input hover:bg-accent hover:text-accent-foreground'
    }`}
    onClick={onClick}
  >
    {truncateWord(categoryName, 12)}
  </button>
);

export default function CompanyPage({ params }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  const [openArticleId, setOpenArticleId] = useState<string | null>(null);
  const [tabChangeRerender, setTabChangeRerender] = useState<number>(1);

  useEffect(() => {
    const draftArticlesSortedByCreatedAt = draftArticles.sort(
      (a, b) => Date.parse(b.createdAt!) - Date.parse(a.createdAt!),
    );
    setArticles([...draftArticlesSortedByCreatedAt]);

    setIsLoading(false);
  }, []);

  const handleSelectArticle = (id: string) => {
    setArticles((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item,
      ),
    );
  };

  const handleCloseOnDrag = useCallback(() => {
    setArticles((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.isActive ? { ...item, isActive: false } : item,
      );
      return updatedItems.some(
        (item, index) => item.isActive !== prevItems[index]!.isActive,
      )
        ? updatedItems
        : prevItems;
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex-col-center h-full">
        <h1 className="heading-4">Please Wait</h1>
        <Loader2Icon className="animate-spin size-6" />
      </div>
    );
  }

  const renderListItem = (
    article: Article,
    order: number,
    onSelectArticle: (id: string) => void,
    onRemoveArticle: (id: string) => void,
  ) => {
    const isOpen = article.id === openArticleId;

    const tabs = [
      {
        id: 0,
        label: 'Title',
        content: (
          <div className="flex w-full flex-col pr-2 py-2">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.75,
                delay: 0.15,
              }}
            >
              <p className="text-xs text-muted-foreground">
                Un article représente la nourriture ou boisson vendu
              </p>
              <motion.input
                type="text"
                value={article.title}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => {
                  const text = e.target.value;
                  setArticles((prevItems) =>
                    prevItems.map((i) =>
                      i.id === article.id ? { ...i, text } : i,
                    ),
                  );
                }}
              />
            </motion.div>
          </div>
        ),
      },
      {
        id: 1,
        label: 'Internationalization',
        content: (
          <div className="flex flex-col pr-2 ">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.75,
                delay: 0.15,
              }}
            >
              <label className="text-xs text-muted-foreground" htmlFor="prompt">
                Prompt{' '}
                <span className="lowercase">
                  instructing your agent how to {article.title.slice(0, 20)}
                </span>
              </label>
              <textarea
                id="prompt"
                className="h-[100px] w-full resize-none rounded-[6px]  bg-neutral-800 px-2 py-[2px] text-sm text-white placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#13EEE3]/80"
                value={article.title}
                placeholder="update agent prompt"
                onChange={(e) => {
                  const description = e.target.value;
                  setArticles((prevItems) =>
                    prevItems.map((i) =>
                      i.id === article.id ? { ...i, description } : i,
                    ),
                  );
                }}
              />
            </motion.div>
          </div>
        ),
      },
      {
        id: 2,
        label: 'Settings',
        content: (
          <div className="flex flex-col py-2 px-1 ">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.75,
                delay: 0.15,
              }}
              className="space-y-3"
            >
              <div className="flex-col-center">
                <p>Settings Section</p>
              </div>
            </motion.div>
          </div>
        ),
      },
    ];

    return (
      <SortableListItem
        key={article.id}
        item={article}
        order={order}
        locale={params.locale}
        isExpanded={isOpen}
        onSelectItem={onSelectArticle}
        onRemoveItem={onRemoveArticle}
        handleDrag={handleCloseOnDrag}
        className="my-2"
        renderExtra={(obj0) => (
          <div
            key={`${isOpen}`}
            className={cn(
              'h-full w-full flex-col items-center justify-center gap-2 ',
              isOpen ? 'p-1 col-span-12' : 'py-3 col-span-1',
            )}
          >
            <div className="flex">
              <motion.button
                layout
                onClick={() => setOpenArticleId(!isOpen ? obj0.id : null)}
                key="collapse"
                className={cn(
                  isOpen
                    ? 'absolute right-3 top-3 z-10 '
                    : 'relative z-10 ml-auto mr-3 ',
                )}
              >
                {isOpen ? (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{
                      type: 'spring',
                      duration: 1.95,
                    }}
                  >
                    <XIcon className="h-5 w-5 text-muted-foreground" />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{
                      type: 'spring',
                      duration: 0.95,
                    }}
                  >
                    <Settings2Icon className="stroke-1 h-5 w-5 text-muted-foreground  hover:stroke-primary/70 " />
                  </motion.span>
                )}
              </motion.button>

              <LayoutGroup id={`${obj0.id}`}>
                <AnimatePresence mode="popLayout">
                  {isOpen ? (
                    <motion.div className="flex w-full flex-col ">
                      <div className=" w-full  ">
                        <motion.div
                          initial={{
                            y: 0,
                            opacity: 0,
                            filter: 'blur(4px)',
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            filter: 'blur(0px)',
                          }}
                          transition={{
                            type: 'spring',
                            duration: 0.15,
                          }}
                          layout
                          className="  w-full"
                        >
                          <DirectionAwareTabs
                            className="mr-auto bg-transparent pr-2"
                            rounded="rounded "
                            tabs={tabs}
                            onChange={() =>
                              setTabChangeRerender(tabChangeRerender + 1)
                            }
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        key={`re-render-${tabChangeRerender}`} //  re-animates the button section on tab change
                        className="mb-2 flex w-full items-center justify-between pl-2"
                        initial={{ opacity: 0, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.55,
                        }}
                      >
                        <motion.div className="flex items-center gap-2 pt-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-xs text-muted-foreground/80">
                            Changes
                          </span>
                        </motion.div>
                        <motion.div layout className="ml-auto mr-1  pt-2">
                          <Button
                            size="sm"
                            onClick={() => {
                              setOpenArticleId(null);
                              toast.info('Changes saved');
                            }}
                          >
                            Apply Changes
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </LayoutGroup>
            </div>
          </div>
        )}
      />
    );
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mb-6 px-4 container mx-auto bg-primary text-white rounded-b-[35%] md:rounded-b md:px-6 shadow-md">
        <Navigation />
      </header>

      <div className="container mx-auto px-4 md:px-6">
        {/* Menu A Name */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary">
                Les Classiques de la Maison
              </CardTitle>
              <Button size="sm" variant="ghost" className="mt-1.5">
                <PlusCircleIcon className="size-4 mr-2" />
                Category
              </Button>
            </div>
            <CardDescription>
              Select a category to view the menu items.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex space-x-4 w-full overflow-x-auto items-center">
              <ScrollArea className="w-full whitespace-nowrap">
                {categories.map((category) => (
                  <CategoryBadge
                    key={category.id}
                    categoryName={category.name}
                    isSelected={selectedCatId === category.id}
                    onClick={() => setSelectedCatId(category.id)}
                  />
                ))}

                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Article List */}
        <SortableList
          items={articles}
          setItems={setArticles}
          onSelectItem={handleSelectArticle}
          renderItem={renderListItem}
        />

        {/* <div className="grid grid-cols-1 gap-4 mt-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div> */}
      </div>
    </main>
  );
}

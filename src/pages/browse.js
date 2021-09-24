import React from "react";
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';
import {BrowseContainer} from "../containers/browse";

export default function Browse() {
    const { shows } = useContent('shows');
    const slides = selectionFilter ({ shows });

    return <BrowseContainer slides={slides} />;
}

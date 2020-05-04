interface GherkinTable {
    rows : GherkinTableRow[]
}

interface GherkinTableRow {
    cells: GherkinTableCell[]
}

interface GherkinTableCell {
    value: string
}
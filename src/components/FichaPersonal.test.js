import { render, screen } from '@testing-library/react';
import FichaPersonal from './FichaPersonal';

describe('FichaPersonal', () => {
  const mockData = {
    nombre: 'Ana Gómez',
    cargo: 'Ingeniera de Software',
    departamento: 'Tecnología'
  };

  describe('cuando el usuario está autenticado', () => {
    beforeEach(() => {
      render(<FichaPersonal {...mockData} autenticado={true} />);
    });

    it('debe renderizar el título correctamente', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Ficha de Personal');
    });

    it('debe mostrar el nombre correctamente', () => {
      expect(screen.getByText(/Ana Gómez/i)).toBeInTheDocument();
    });

    it('debe mostrar el cargo correctamente', () => {
      expect(screen.getByText(/Ingeniera de Software/i)).toBeInTheDocument();
    });

    it('debe mostrar el departamento correctamente', () => {
      expect(screen.getByText(/Tecnología/i)).toBeInTheDocument();
    });

    it('debe tener un div con la clase "App"', () => {
      const container = screen.getByText('Ficha de Personal').closest('div');
      expect(container).toHaveClass('App');
    });

    it('snapshot del componente autenticado', () => {
      const { asFragment } = render(
        <FichaPersonal {...mockData} autenticado={true} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('cuando el usuario NO está autenticado', () => {
    it('debe mostrar un mensaje de acceso denegado', () => {
      render(<FichaPersonal {...mockData} autenticado={false} />);
      expect(screen.getByText(/no tienes acceso/i)).toBeInTheDocument();
    });

    it('snapshot del componente no autenticado', () => {
      const { asFragment } = render(
        <FichaPersonal {...mockData} autenticado={false} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

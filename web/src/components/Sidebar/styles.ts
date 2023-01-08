import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
	height: 100%;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
`;


export const OpenSideBar = styled.header`
	height: 85%;
	width: 15%;

	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	

	display: flex;
	align-items: center;

	svg {
		color: #f9f9f9;
	}

	section {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;

		max-width: 240px;
		height: 100%;

		background: var(--second-background);
		border-radius: 0 12px 12px 0;

		ul li {
			cursor: pointer;
		}

		/* Links principais do app */
		nav {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			width: 100%;

			> span {
				width: 100%;
				display: flex;
				align-items: flex-start;

				button {
					cursor: pointer;
					padding: 18px;

					&:hover {
						svg path {
							color: var(--third-color);
						}
					}

					svg {
						width: 24px;
						height: 24px;

						color: #c4c4c4;
					}
				}
			}

			div {
				

				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding-left: 24px;
				flex-direction: row;
				gap: 16px;

				img {
					width: 100px;
					height: 100px;
					border-radius: 50%;
				}

				h1 {
					color: #fff;
					font-size: 14px;
					fontFamily: 'Abril Fatface'
					animation: ${appearFromRight} 0.4s;
				}
			}

			ul {
				margin-top: 64px;
				width: 100%;
				text-align: left;
				display: flex;
				flex-direction: column;

				a {
					color: black;
					padding: 16px 20px;
					border-radius: 8px 0 0 8px;
                    
					display: flex;
					align-items: center;
					gap: 16px;

					transition: background 0.3s;
					&:hover {
						background: var(--shadow-black-color);

						svg path {
							color: var(--third-color);
						}
					}

					

					svg {
						width: 20px;
						height: 20px;
					}
				}
			}
		}

		/* Icones que pode não ser tão principais no app */
		div {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			ul {
				margin-bottom: 16px;
				text-align: left;
				width: 100%;
				display: flex;
				flex-direction: column;

				a {
					padding: 16px 20px;
					display: flex;
					align-items: center;
					color: black;
			
					gap: 16px;
					transition: color 0.3s;
					&:hover {
						svg path {
							color: var(--third-color);
						}
					}
					svg {
						width: 20px;
						height: 20px;
					}

					p {
						animation: ${appearFromRight} 0.4s;
                        font-size:20px
					
					}
				}
			}

			span {
				padding: 16px 0;
				border-radius: 8px 8px 0 0;

				background: var(--third-color);
				width: 100%;

				display: flex;
				align-items: center;
				gap: 12px;

				p {
					text-overflow: ellipsis;
					color: #c4c4c4;
					width: 70%;
                    
					padding-right: 12px;
					white-space: nowrap;
					animation: ${appearFromRight} 0.4s;
					overflow: hidden;
				}

				img {
					margin-left: 14px;
					width: 32px;
					height: 32px;
					border-radius: 50%;
				}
			}
		}
	}

	aside {
		width: 100%;
		height: 100%;
	}
`;
